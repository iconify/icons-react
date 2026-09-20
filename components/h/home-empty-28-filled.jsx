import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r3ruvdb4a {
  fill: currentColor;
  d: path("M12.592 3.498a2.25 2.25 0 0 1 2.816 0l7.75 6.217A2.25 2.25 0 0 1 24 11.47v11.28A2.25 2.25 0 0 1 21.75 25H6.25A2.25 2.25 0 0 1 4 22.75V11.47c0-.683.31-1.328.842-1.755z");
}
</style><path class="r3ruvdb4a"/>`,
		"fallback": "fluent:home-empty-28-filled",
	});
}

export default Component;
