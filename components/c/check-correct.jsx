import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d79_wtv7f.css';
import '../../css/b/b1xcyxb7w.css';
import '../../css/m/m594zc8-q.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSCheckCorrect0"><g class="ft5dv1b6b"><g clip-path="url(#ipSCheckCorrect1)" class="d79_wtv7f"><path class="b1xcyxb7w"/><path class="m594zc8-q"/></g><defs><clipPath id="ipSCheckCorrect1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSCheckCorrect0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:check-correct",
	});
}

export default Component;
