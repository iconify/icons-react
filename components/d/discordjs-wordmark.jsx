import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2idjnv6y.css';
import '../../css/y/ydms6jbyw.css';
import '../../css/r/ry4z7cctf.css';
import '../../css/j/jpdimfb6i.css';
import '../../css/g/gybnh077k.css';
import '../../css/n/n47wa0b5w.css';
import '../../css/o/o5ynpdg1y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2idjnv6y"/><path class="ydms6jbyw"/><path class="ry4z7cctf"/><path class="jpdimfb6i"/><path class="gybnh077k"/><path class="n47wa0b5w"/><path class="o5ynpdg1y"/>`,
		"fallback": "devicon:discordjs-wordmark",
	});
}

export default Component;
