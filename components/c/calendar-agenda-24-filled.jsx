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
		"content": `<style>.ue1mi7bfw {
  fill: currentColor;
  d: path("M21 17.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25zm-4-10a.75.75 0 0 0-.648-.743L16.25 7h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007A.75.75 0 0 0 17 7.75m0 8.5a.75.75 0 0 0-.648-.743l-.102-.007h-8.5l-.102.007a.75.75 0 0 0 0 1.486L7.75 17h8.5l.102-.007A.75.75 0 0 0 17 16.25M17 12a.75.75 0 0 0-.648-.743l-.102-.007h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007A.75.75 0 0 0 17 12");
}
</style><path class="ue1mi7bfw"/>`,
		"fallback": "fluent:calendar-agenda-24-filled",
	});
}

export default Component;
