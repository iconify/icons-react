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
		"content": `<style>.ra-mq9bga {
  fill: currentColor;
  d: path("M11.403 18.989q-.286-.106-.503-.324L9.752 17.63q-2.67-2.425-4.71-4.717Q3 10.622 3 8.15q0-1.908 1.296-3.204T7.5 3.65q1.094 0 2.279.553T12 6.289q1.037-1.533 2.221-2.086T16.5 3.65q1.908 0 3.204 1.296T21 8.15q0 2.529-2.125 4.862t-4.652 4.622l-1.142 1.031q-.218.218-.513.323t-.587.106t-.578-.106");
}
</style><path class="ra-mq9bga"/>`,
		"fallback": "material-symbols-light:favorite-rounded",
	});
}

export default Component;
