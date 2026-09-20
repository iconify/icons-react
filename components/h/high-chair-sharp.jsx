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
		"content": `<style>.bv3a3944i {
  fill: currentColor;
  d: path("m7 20l.865-9.873L6.884 4h1.894q1.206 0 2.088.777q.881.777 1.093 1.977l.45 2.862H17v1h-1.766L16.059 20h-1l-.156-1.884H8.156L8 20zm1.254-2.884h6.544l-.233-2.75H8.493zm.317-3.75h5.916l-.258-2.75H8.823z");
}
</style><path class="bv3a3944i"/>`,
		"fallback": "material-symbols-light:high-chair-sharp",
	});
}

export default Component;
