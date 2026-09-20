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
		"content": `<style>.k2mfrb6ua {
  fill: var(--svg-color--faa520, #faa520);
  d: path("m16.056 2.024l-4.726 9.765l4.799 4.182l4.657-4.182z");
}

.le0w2xbcu {
  fill: var(--svg-color--e18026, #e18026);
  d: path("M29.153 18.64V6.726l-11.9 10.507l6.843 5.798z");
}

.ot5rfub_i {
  stroke-width: var(--svg-stroke-width--0-406px, 0.406px);
}

.ude7y1bej {
  fill: var(--svg-color--f78f28, #f78f28);
  d: path("m3.213 6.863l-.367 11.773l13.28 11.34l6.664-5.834z");
}
</style><g class="ot5rfub_i"><path class="k2mfrb6ua"/><path class="ude7y1bej"/><path class="le0w2xbcu"/></g>`,
		"fallback": "vscode-icons:file-type-grain",
	});
}

export default Component;
