import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.elngajv9d {
  fill: var(--svg-color--00a0e1, #00a0e1);
  d: path("M16.514 8.03a.51.51 0 0 1 .726 0l3.608 3.607a.52.52 0 0 1 .152.364a.5.5 0 0 1-.152.363l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.514.514 0 0 1 0-.727zm-4.872 4.876a.51.51 0 0 1 .716 0l3.613 3.608a.513.513 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.029 17.24a.51.51 0 0 1 0-.727l3.608-3.608zM6.76 8.03a.51.51 0 0 1 .726 0l3.608 3.608a.52.52 0 0 1 .112.56a.5.5 0 0 1-.112.167l-3.608 3.608a.51.51 0 0 1-.726 0l-3.608-3.608a.513.513 0 0 1 0-.727z");
}

.ft5dv1b6b {
  fill: none;
}

.wjy60tdbg {
  fill: var(--svg-color--fefefe, #fefefe);
  d: path("M11.643 3.146a.51.51 0 0 1 .716 0l3.613 3.613a.515.515 0 0 1 0 .727l-3.608 3.608a.51.51 0 0 1-.726 0L8.03 7.486a.51.51 0 0 1 0-.727z");
}
</style><g class="ft5dv1b6b"><path class="wjy60tdbg"/><path class="elngajv9d"/></g>`,
		"fallback": "token-branded:bct",
	});
}

export default Component;
