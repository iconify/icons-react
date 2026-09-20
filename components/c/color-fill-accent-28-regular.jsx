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
		"content": `<style>.a6zgpz0gz {
  fill: currentColor;
  d: path("M16.512 17.75a3 3 0 0 0-.012.25a3.5 3.5 0 0 0 6.973.438c.479.456.777 1.1.777 1.812v1.5a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5v-1.5a2.5 2.5 0 0 1 2.5-2.5h1.011l1.102 1.102a3.75 3.75 0 0 0 5.303 0l1.101-1.102z");
}
</style><path class="a6zgpz0gz"/>`,
		"fallback": "fluent:color-fill-accent-28-regular",
	});
}

export default Component;
