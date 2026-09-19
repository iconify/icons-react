import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/w/wm5_0zb0p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuo13Db6F"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="wm5_0zb0p"/></g></mask></defs><path mask="url(#SVGuo13Db6F)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-hiding",
	});
}

export default Component;
