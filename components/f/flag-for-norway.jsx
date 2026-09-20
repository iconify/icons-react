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
		"content": `<style>.k10pfowur {
  fill: var(--svg-color--ef2b2d, #ef2b2d);
  d: path("M10 5H4a4 4 0 0 0-4 4v6h10zm22 0H16v10h20V9a4 4 0 0 0-4-4M10 31H4a4 4 0 0 1-4-4v-6h10zm22 0H16V21h20v6a4 4 0 0 1-4 4");
}

.rju9-4ojg {
  fill: var(--svg-color--eee, #eee);
  d: path("M14.5 31H16V21h20v-1.5H14.5zM16 5h-1.5v11.5H36V15H16zm-4.5 0H10v10H0v1.5h11.5zM0 19.5V21h10v10h1.5V19.5z");
}

.sfngstbas {
  fill: var(--svg-color--002868, #002868);
  d: path("M14.5 5h-2.944l-.025 11.5H0v3h11.525L11.5 31h3V19.5H36v-3H14.5z");
}
</style><path class="k10pfowur"/><path class="sfngstbas"/><path class="rju9-4ojg"/>`,
		"fallback": "twemoji:flag-for-norway",
	});
}

export default Component;
