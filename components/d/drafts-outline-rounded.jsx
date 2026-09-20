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
		"content": `<style>.oxt5vbc1a {
  fill: currentColor;
  d: path("m13.025 1.6l8.025 4.8q.45.275.7.75t.25 1V19q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19V8.15q0-.525.25-1t.7-.75l8.025-4.8q.475-.275 1.025-.275t1.025.275M12 12.65L19.8 8L12 3.35L4.2 8zm-1.025 1.725L4 10.2V19h16v-8.8l-6.975 4.175q-.475.275-1.025.275t-1.025-.275M13.025 19H20H4z");
}
</style><path class="oxt5vbc1a"/>`,
		"fallback": "material-symbols:drafts-outline-rounded",
	});
}

export default Component;
