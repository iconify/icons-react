import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/s/s5vqc5btn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUHJQRchC"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="s5vqc5btn"/></g></mask></defs><path mask="url(#SVGUHJQRchC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:add-subtract",
	});
}

export default Component;
