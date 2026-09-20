import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.e_mdnbi_j {
  d: path("M144 128a7.76 7.76 0 0 1-3.63 6.59l-88.19 56.15A7.91 7.91 0 0 1 40 184.15V71.85a7.91 7.91 0 0 1 12.18-6.59l88.19 56.15A7.76 7.76 0 0 1 144 128m100.37-6.59l-88.19-56.15A7.91 7.91 0 0 0 144 71.85v112.3a7.91 7.91 0 0 0 12.18 6.59l88.19-56.15a7.8 7.8 0 0 0 0-13.18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o3axi1b9w {
  d: path("M248.67 114.66L160.48 58.5A15.91 15.91 0 0 0 136 71.84v37.3L56.48 58.5A15.91 15.91 0 0 0 32 71.84v112.32a15.92 15.92 0 0 0 24.48 13.34L136 146.86v37.3a15.92 15.92 0 0 0 24.48 13.34l88.19-56.16a15.8 15.8 0 0 0 0-26.68M48 183.94V72.07L135.82 128Zm104 0V72.07L239.82 128Z");
}
</style><g class="cuyn6tgcc"><path class="e_mdnbi_j"/><path class="o3axi1b9w"/></g>`,
		"fallback": "ph:fast-forward-duotone",
	});
}

export default Component;
