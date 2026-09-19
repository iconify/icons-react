import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/m/mm4ny9-1p.css';
import '../../css/v/v0rfqyzpp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgA8a3bBK"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><circle class="mm4ny9-1p"/><path class="v0rfqyzpp"/></g></mask></defs><path mask="url(#SVGgA8a3bBK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-staff",
	});
}

export default Component;
