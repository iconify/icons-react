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
		"content": `<style>.scqwm6rcs {
  fill: currentColor;
  d: path("M19.117 12.48H3.481q-.214 0-.357-.142t-.143-.357t.143-.357t.357-.143h15.636L14.32 6.677q-.14-.14-.143-.341q-.003-.202.143-.348q.14-.14.344-.14t.345.14l5.427 5.427q.13.131.183.268q.053.136.053.298t-.053.308q-.052.146-.183.277l-5.427 5.426q-.14.14-.342.14q-.2 0-.347-.14q-.165-.146-.156-.356q.01-.211.156-.357z");
}
</style><path class="scqwm6rcs"/>`,
		"fallback": "material-symbols-light:east-rounded",
	});
}

export default Component;
