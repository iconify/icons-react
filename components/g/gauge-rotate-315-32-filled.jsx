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
		"content": `<style>.u6plk5kjz {
  fill: currentColor;
  d: path("M17.37 2.066C24.46 2.756 30 8.73 30 16c0 7.732-6.268 14-14 14S2 23.732 2 16c0-3.731 1.462-7.124 3.84-9.633a1.25 1.25 0 0 1 1.815 1.72A11.46 11.46 0 0 0 4.5 16c0 6.351 5.149 11.5 11.5 11.5S27.5 22.351 27.5 16c0-5.97-4.55-10.88-10.372-11.445a1.25 1.25 0 0 1 .242-2.489M8.71 10.4c-.59-1.076.612-2.278 1.688-1.688l.108.065c2.34 1.571 4.692 3.127 6.982 4.77c.588.423 1.115.815 1.34 1.039a3 3 0 0 1-4.244 4.242c-.224-.225-.615-.751-1.037-1.339c-1.348-1.877-3.632-5.277-4.772-6.981z");
}
</style><path class="u6plk5kjz"/>`,
		"fallback": "fluent:gauge-rotate-315-32-filled",
	});
}

export default Component;
