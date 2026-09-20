import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.my6xh_svn {
  fill: currentColor;
  d: path("M3 4.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 3 4.25m3.5 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m9.378 7.032l.348 1.071a2.2 2.2 0 0 0 1.399 1.397l1.093.354a.423.423 0 0 1 0 .798l-1.072.348a2.2 2.2 0 0 0-1.399 1.397l-.348 1.07a.423.423 0 0 1-.798 0l-.349-1.07a2.22 2.22 0 0 0-1.398-1.403l-1.071-.348a.423.423 0 0 1 0-.798l1.071-.348a2.2 2.2 0 0 0 1.377-1.397l.348-1.07a.423.423 0 0 1 .799 0M13.75 5a1.75 1.75 0 1 1 0 3.5h-7.5a3.25 3.25 0 1 0 0 6.5h4.84a1.4 1.4 0 0 1-.09-.504c0-.44.204-.782.406-.996H6.25a1.75 1.75 0 1 1 0-3.5h7.5a3.25 3.25 0 0 0 0-6.5h-3a.75.75 0 0 0 0 1.5z");
}
</style><path class="my6xh_svn"/>`,
		"fallback": "fluent:flow-sparkle-20-filled",
	});
}

export default Component;
