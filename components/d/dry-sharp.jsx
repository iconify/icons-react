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
		"content": `<style>.z_6xtuemc {
  fill: currentColor;
  d: path("M18 21H3v-9.563l9.26-6l.894.97l-2.277 3.785H19v1h-6v2.27h8v1h-8v2.269h7v1h-7V20h5zM15.61 8.308q.067-.852-.109-1.401t-.737-1.26q-.68-.847-.913-1.609q-.234-.761-.155-1.73h.996q-.084.91.125 1.47q.21.562.843 1.42q.573.779.792 1.497t.14 1.613zm3.39 0q.067-.852-.111-1.401q-.18-.55-.741-1.26q-.679-.847-.91-1.609t-.152-1.73h.991q-.085.91.125 1.47q.21.562.842 1.42q.573.779.792 1.497t.141 1.613z");
}
</style><path class="z_6xtuemc"/>`,
		"fallback": "material-symbols-light:dry-sharp",
	});
}

export default Component;
