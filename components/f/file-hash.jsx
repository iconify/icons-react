import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/x/x95gbdcdl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYstLId6m"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><path class="x95gbdcdl"/></g></mask></defs><path mask="url(#SVGYstLId6m)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-hash",
	});
}

export default Component;
