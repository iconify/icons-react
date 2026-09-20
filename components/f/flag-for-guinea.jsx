import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.apxht593w {
  fill: var(--svg-color--ce1126, #ce1126);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.arudnqcpi {
  fill: var(--svg-color--fcd116, #fcd116);
  d: path("M12 5h12v26H12z");
}

.qczurlbnk {
  fill: var(--svg-color--009460, #009460);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}
</style><path class="apxht593w"/><path class="arudnqcpi"/><path class="qczurlbnk"/>`,
		"fallback": "twemoji:flag-for-guinea",
	});
}

export default Component;
