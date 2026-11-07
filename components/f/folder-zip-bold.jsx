import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bemqz-b9d.css';
import '../../css/r/r73zfvjpk.css';
import '../../css/d/du7ajyr2c.css';
import '../../css/o/oh3q9w3lr.css';
import '../../css/s/secejiv4t.css';
import '../../css/r/rieetqbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bemqz-b9d"/><path clip-rule="evenodd" class="r73zfvjpk"/><path class="du7ajyr2c"/><path class="oh3q9w3lr"/><path class="secejiv4t"/><path class="rieetqbet"/>`,
		"fallback": "solar:folder-zip-bold",
	});
}

export default Component;
