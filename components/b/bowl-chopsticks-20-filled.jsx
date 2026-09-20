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
		"content": `<style>.h7izy1s0a {
  fill: currentColor;
  d: path("M4.238 2.074a.5.5 0 0 1 .688.164L9.087 9h1.826L7.074 2.762a.5.5 0 0 1 .852-.524L12.087 9H17.5a.5.5 0 0 1 .5.5v.5a8 8 0 0 1-.252 2H2.252A8 8 0 0 1 2 10v-.5a.5.5 0 0 1 .5-.5h5.413L4.074 2.762a.5.5 0 0 1 .164-.688M10 18a8 8 0 0 1-7.418-5h14.837A8 8 0 0 1 10 18");
}
</style><path class="h7izy1s0a"/>`,
		"fallback": "fluent:bowl-chopsticks-20-filled",
	});
}

export default Component;
