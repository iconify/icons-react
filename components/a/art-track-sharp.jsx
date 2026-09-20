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
		"content": `<style>.b0n4bqbxz {
  fill: currentColor;
  d: path("M15 19H1V5h14zm2 0V5h2v14zm4 0V5h2v14zM4 15h8l-2.6-3.5L7.5 14l-1.4-1.85z");
}
</style><path class="b0n4bqbxz"/>`,
		"fallback": "material-symbols:art-track-sharp",
	});
}

export default Component;
