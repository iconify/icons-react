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
		"content": `<style>.ds5nztbpf {
  fill: currentColor;
  d: path("M6.692 10.596q-.58-.511-.934-1.242t-.354-1.565q0-1.587 1.091-2.688Q7.587 4 9.173 4q.64 0 1.237.228q.596.228 1.09.632V2h1v2.84q.494-.378 1.09-.61q.597-.23 1.218-.23q1.586 0 2.687 1.101t1.101 2.688q0 .853-.354 1.575q-.354.72-.934 1.232zM4 21v-3.154q0-.69.463-1.153t1.153-.462H6.98l.385-3.02H4v-1h16v1h-3.384l.384 3.02h1.385q.69 0 1.152.462T20 17.846V21z");
}
</style><path class="ds5nztbpf"/>`,
		"fallback": "material-symbols-light:chess-king",
	});
}

export default Component;
