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
		"content": `<style>.w7dbo3umk {
  fill: currentColor;
  d: path("m12 21l-3.2-2.85q-1.8-1.625-3.088-2.9t-2.124-2.4t-1.225-2.175t-.388-2.2q0-2.35 1.575-3.912T7.475 3q1.3 0 2.475.55T12 5.1q.875-1 2.05-1.55T16.525 3q2.35 0 3.925 1.563t1.575 3.912q0 1.15-.387 2.2t-1.225 2.175t-2.125 2.4t-3.088 2.9zm-5.175-7.5h10.35q.4-.425.725-.788t.6-.712h-13q.275.35.6.713t.725.787M12 18.3q.9-.8 1.688-1.487t1.437-1.313h-6.25q.65.625 1.438 1.313T12 18.3");
}
</style><path class="w7dbo3umk"/>`,
		"fallback": "material-symbols:cardio-load",
	});
}

export default Component;
