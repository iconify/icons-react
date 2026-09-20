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
		"content": `<style>.i3n5hsb3g {
  fill: currentColor;
  d: path("m15.55 20.4l-3.45-3.45l1.4-1.4l2.05 2.05l5.05-5.05l1.4 1.4zm-8.375-9.575Q6 9.65 6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12t-2.825-1.175M12.85 13.3L9.2 16.95L12.25 20H2v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13q.75 0 1.463.075t1.387.225");
}
</style><path class="i3n5hsb3g"/>`,
		"fallback": "material-symbols:how-to-reg",
	});
}

export default Component;
