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
		"content": `<style>.jlse0swxc {
  fill: currentColor;
  d: path("m18 20.289l-.708-.714l2.075-2.075H12.5v-1h6.867l-2.075-2.08l.708-.708L21.288 17zM20 10h-1V5h-3v2.23H8V5H5v14h5.5v1H4V4h6.252q.14-.586.623-.985q.483-.4 1.125-.4q.654 0 1.134.4q.48.398.62.985H20zm-7.422-4.999q.23-.23.23-.578t-.23-.578t-.578-.23t-.578.23t-.23.578t.23.578t.578.23t.578-.23");
}
</style><path class="jlse0swxc"/>`,
		"fallback": "material-symbols-light:content-paste-go-sharp",
	});
}

export default Component;
