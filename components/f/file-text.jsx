import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/k/kbm-5bg3s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG47qKXdbF"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="kbm-5bg3s"/></g></mask></defs><path mask="url(#SVG47qKXdbF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-text",
	});
}

export default Component;
