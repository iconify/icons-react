import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/l/l2val51bz.css';
import '../../css/e/e6mk55bwu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0En7VbxT"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="l2val51bz"/><path class="e6mk55bwu"/></g></mask></defs><path mask="url(#SVG0En7VbxT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-withdrawal",
	});
}

export default Component;
