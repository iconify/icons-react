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
		"content": `<style>.g0ig5309e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.303 6.313q-2.868 1.912-3.042 7.015q-.88.195-1.559.874q-.952.952-.952 2.298V19q0 1.346.952 2.298T5 22.25t2.298-.952T8.25 19v-2.5q0-2.843-2.487-3.199q.163-4.267 2.372-5.739q2.158-1.439 4.539 1.418q.057.069.129.122Q12.5 9.9 12.5 11q0 4 4 4t4-4t-4-4q-1.833 0-2.826.84q-3.169-3.661-6.371-1.527M16.5 8.75q2.25 0 2.25 2.25t-2.25 2.25T14.25 11t2.25-2.25");
}
</style><path class="g0ig5309e"/>`,
		"fallback": "uix-solid:endoscope",
	});
}

export default Component;
