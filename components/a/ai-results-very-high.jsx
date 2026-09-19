import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8_timb4b.css';
import '../../css/k/kjn-utb6c.css';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/c/cytj3kbqo.css';
import '../../css/f/ftpj2s7sw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8_timb4b"/><path class="kjn-utb6c"/><path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="cytj3kbqo"/><path class="ftpj2s7sw"/>`,
		"fallback": "carbon:ai-results-very-high",
	});
}

export default Component;
