import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al88j65bh.css';
import '../../css/j/jd1srsr7p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al88j65bh"/><path class="jd1srsr7p"/>`,
		"fallback": "devicon-plain:digitalocean-wordmark",
	});
}

export default Component;
