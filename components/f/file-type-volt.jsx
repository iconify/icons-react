import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lbk6cu_lh {
  fill: var(--svg-color--gray, gray);
  d: path("M12.068 2h6.866l-2.73 8.421l7.322-1.331L13.115 30l3.037-14.505L8.474 17z");
}
</style><path class="lbk6cu_lh"/>`,
		"fallback": "vscode-icons:file-type-volt",
	});
}

export default Component;
