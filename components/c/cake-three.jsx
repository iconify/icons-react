import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t9w8_j8sg.css';
import '../../css/b/b8r00ibax.css';
import '../../css/y/yd8f70bky.css';
import '../../css/b/bdmvmg3am.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0LE93dYc"><g class="wwvp95byt"><path class="t9w8_j8sg"/><path class="b8r00ibax"/><path class="yd8f70bky"/><path class="bdmvmg3am"/></g></mask></defs><path mask="url(#SVG0LE93dYc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cake-three",
	});
}

export default Component;
