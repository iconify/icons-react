import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fhd-l7bom {
  fill: currentColor;
  d: path("M12.45 16.002a2.501 2.501 0 0 1-4.9 0zM9.998 2c1.09 0 2.113.28 2.995.77A3 3 0 0 0 16 7.83v3.579l.953 2.587l.026.085l.015.086l.005.089c0 .315-.195.59-.522.707l-.113.033l-.115.01H3.752a.8.8 0 0 1-.26-.047c-.287-.105-.475-.372-.482-.716l.004-.117l.034-.13l.951-2.584L4 7.793l.005-.225C4.127 4.451 6.77 2 9.998 2M15 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="fhd-l7bom"/>`,
		"fallback": "fluent:alert-badge-20-filled",
	});
}

export default Component;
