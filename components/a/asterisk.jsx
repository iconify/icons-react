import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w55in7b1i.css';
import '../../css/f/frw56obzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeUF2peIj"><g class="wwvp95byt"><path class="w55in7b1i"/><path class="frw56obzv"/></g></mask></defs><path mask="url(#SVGeUF2peIj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:asterisk",
	});
}

export default Component;
