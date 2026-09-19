import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/w/wac_9cbmb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwHeP2bzv"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="wac_9cbmb"/></g></mask></defs><path mask="url(#SVGwHeP2bzv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:asterisk-key",
	});
}

export default Component;
