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
		"content": `<style>.a5xselb5w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.609 20.64q-2.315-1.414-4.62-3.56Q2.25 12.67 2.25 8.75q0-2.298 1.601-3.899T7.75 3.25q2.621 0 4.25 1.953q1.629-1.953 4.25-1.953q2.298 0 3.899 1.601T21.75 8.75q0 3.92-4.739 8.33q-2.305 2.146-4.62 3.56q-.088.054-.188.082q-.099.028-.203.028t-.203-.028t-.188-.082");
}
</style><path class="a5xselb5w"/>`,
		"fallback": "uix-solid:heart",
	});
}

export default Component;
