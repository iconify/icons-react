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
		"content": `<style>.hzeylpd3a {
  fill: currentColor;
  d: path("M4.77 20.23v-3.942h2.684l.685-4.788h-2.37v-1h12.462v1h-2.37l.685 4.789h2.685v3.942zM7.911 9.616L6.615 3.77q.71.452 1.325.704q.616.252 1.358.252q.827 0 1.501-.272T12 3.75q.527.43 1.201.703t1.482.272q.684 0 1.28-.242q.597-.243 1.44-.714l-1.309 5.847z");
}
</style><path class="hzeylpd3a"/>`,
		"fallback": "material-symbols-light:chess-sharp",
	});
}

export default Component;
