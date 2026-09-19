import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ebd6yeibc.css';
import '../../css/y/yj6rd0m8s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGie0JFcFo"><g class="wwvp95byt"><path class="ebd6yeibc"/><path class="yj6rd0m8s"/></g></mask></defs><path mask="url(#SVGie0JFcFo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bill",
	});
}

export default Component;
