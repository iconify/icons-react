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
		"content": `<style>.blyb63bdi {
  fill: currentColor;
  d: path("M15.5 11.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM11.75 11a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m-2.25.75a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM5.75 15.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75m13.25.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM11.75 2h3.75a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3v1.018A7 7 0 0 1 19 13h.75A2.25 2.25 0 0 1 22 15.25v6a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.75-.75v-6A2.25 2.25 0 0 1 4.25 13H5a7 7 0 0 1 6-6.93V2.75a.75.75 0 0 1 .75-.75M12 7.5A5.5 5.5 0 0 0 6.5 13v.75a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0-.75.75v5.25h6v-2.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v2.75h6v-5.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1-.75-.75V13A5.5 5.5 0 0 0 12 7.5m1 11h-2v2h2z");
}
</style><path class="blyb63bdi"/>`,
		"fallback": "fluent:building-government-24-regular",
	});
}

export default Component;
