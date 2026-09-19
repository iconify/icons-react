import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w55in7b1i.css';
import '../../css/t/t068w4bjg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6doHwbqy"><g class="wwvp95byt"><path class="w55in7b1i"/><path class="t068w4bjg"/></g></mask></defs><path mask="url(#SVG6doHwbqy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:crown-two",
	});
}

export default Component;
