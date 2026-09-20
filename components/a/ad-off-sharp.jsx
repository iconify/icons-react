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
		"content": `<style>.zfsi9rbrb {
  fill: currentColor;
  d: path("m19.41 20.83l-.831-.83H4V5.421l-.83-.836l.707-.708l16.246 16.246zM5 19h12.579L5 6.421zm15-1.825l-1-1V8.154h-8.021L6.825 4H20z");
}
</style><path class="zfsi9rbrb"/>`,
		"fallback": "material-symbols-light:ad-off-sharp",
	});
}

export default Component;
