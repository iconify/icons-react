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
		"content": `<style>.d9mdg62pz {
  d: path("m22.07 12.489l6.086-3.498L16 1.994L3.845 8.99v13.996l6.092 3.507l-.007-7.015L16 22.974V15.99l-6.07-3.5L16 8.994z");
}

.hmqwllx_r {
  fill: var(--svg-color--ac304f, #ac304f);
}

.qi6yahbka {
  d: path("m22.07 19.466l6.086 3.52L16 30.006v-7.033z");
}
</style><g class="hmqwllx_r"><path class="d9mdg62pz"/><path class="qi6yahbka"/></g>`,
		"fallback": "vscode-icons:file-type-frontcommerce",
	});
}

export default Component;
