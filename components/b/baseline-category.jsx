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
		"content": `<style>.tv5w3ab-g {
  fill: currentColor;
  d: path("M3 13.5h8v8H3z");
}

.u1l7rqbek {
  cx: 17.5px;
  cy: 17.5px;
  r: 4.5px;
  fill: currentColor;
}

.vq4wcu2jz {
  fill: currentColor;
  d: path("m12 2l-5.5 9h11z");
}
</style><path class="vq4wcu2jz"/><circle class="u1l7rqbek"/><path class="tv5w3ab-g"/>`,
		"fallback": "ic:baseline-category",
	});
}

export default Component;
