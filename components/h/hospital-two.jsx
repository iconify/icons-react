import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bfw5vbbee.css';
import '../../css/q/qncvjub9g.css';
import '../../css/q/q30hebxnj.css';
import '../../css/j/j20ky6b1p.css';
import '../../css/p/pyzldsbtr.css';
import '../../css/u/ui8a7xywg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGv7SmWb1S"><g class="wwvp95byt"><path class="bfw5vbbee"/><path class="qncvjub9g"/><path class="q30hebxnj"/><path class="j20ky6b1p"/><path class="pyzldsbtr"/><path class="ui8a7xywg"/></g></mask></defs><path mask="url(#SVGv7SmWb1S)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:hospital-two",
	});
}

export default Component;
