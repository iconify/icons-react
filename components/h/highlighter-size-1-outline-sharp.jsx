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
		"content": `<style>.e6rh69bjm {
  fill: currentColor;
  d: path("m6.7 18.7l-1.4-1.4Q5 17 5 16.588t.3-.713L15.875 5.3q.3-.3.713-.3t.712.3l1.4 1.4q.3.3.3.713t-.3.712L8.1 18.7q-.275.275-.7.275t-.7-.275");
}
</style><path class="e6rh69bjm"/>`,
		"fallback": "material-symbols:highlighter-size-1-outline-sharp",
	});
}

export default Component;
