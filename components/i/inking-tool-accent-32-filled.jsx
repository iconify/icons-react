import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cu83zhbxm {
  fill: currentColor;
  d: path("M3 4h26v4a1 1 0 0 1-1 1h-5c0 .15-.034.303-.106.447l-5 10a1 1 0 1 1-1.788-.894L20.882 9H4a1 1 0 0 1-1-1zm14.857 21.875c0 1.864-.863 3.375-1.928 3.375S14 27.739 14 25.875s.864-3.375 1.929-3.375s1.928 1.511 1.928 3.375");
}
</style><path class="cu83zhbxm"/>`,
		"fallback": "fluent:inking-tool-accent-32-filled",
	});
}

export default Component;
