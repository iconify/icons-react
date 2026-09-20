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
		"content": `<style>.ap2j7ccdn {
  d: path("M12 2.001c5.524 0 10 4.477 10 10s-4.476 10-10 10c-5.522 0-10-4.477-10-10s4.478-10 10-10zm0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17zm-4.25 7.75h8.5a.75.75 0 0 1 .102 1.492l-.102.007h-8.5a.75.75 0 0 1-.102-1.493l.102-.007h8.5h-8.5z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="ap2j7ccdn"/></g>`,
		"fallback": "fluent:block-24-regular",
	});
}

export default Component;
