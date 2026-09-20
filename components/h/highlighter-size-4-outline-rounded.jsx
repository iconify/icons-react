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
		"content": `<style>.gzzo5qcsk {
  fill: currentColor;
  d: path("m8.825 20.825l-5.65-5.65q-.3-.3-.3-.712t.3-.713L13.75 3.175q.3-.3.713-.3t.687.3l5.675 5.65q.3.3.3.713t-.3.712L10.25 20.825q-.3.3-.712.3t-.713-.3");
}
</style><path class="gzzo5qcsk"/>`,
		"fallback": "material-symbols:highlighter-size-4-outline-rounded",
	});
}

export default Component;
