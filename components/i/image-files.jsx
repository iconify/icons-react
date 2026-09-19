import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/seqkjy8_m.css';
import '../../css/k/kemav7bvw.css';
import '../../css/k/kkjswnaob.css';
import '../../css/u/uq05w02ci.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGpLdqtcWN"><g class="wwvp95byt"><path class="seqkjy8_m"/><path class="kemav7bvw"/><circle class="kkjswnaob"/><path class="uq05w02ci"/></g></mask></defs><path mask="url(#SVGpLdqtcWN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:image-files",
	});
}

export default Component;
