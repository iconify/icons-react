import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qoty63byr {
  fill: currentColor;
  d: path("M5.885 10.192H4.827q-.192 0-.317-.125t-.125-.316t.125-.317t.317-.126h1.5q.192 0 .317.125t.125.317v4.5q0 .192-.125.317t-.316.125t-.318-.125t-.125-.317zm3.384 4.058v-1.866q0-.326.221-.548q.221-.22.548-.22h2.27v-1.424H9.712q-.192 0-.317-.125t-.126-.316t.126-.317t.317-.126h2.711q.327 0 .548.22q.221.222.221.549v1.539q0 .326-.22.548q-.222.22-.549.22h-2.27v1.424h2.597q.192 0 .317.125t.125.316t-.125.317t-.317.126H9.712q-.192 0-.317-.125t-.126-.317m9.077.442h-2.711q-.192 0-.317-.125q-.126-.125-.126-.316t.126-.317t.317-.126h2.596v-1.423h-1.654q-.154 0-.27-.112q-.115-.111-.115-.273t.116-.273q.115-.111.269-.111h1.654v-1.424h-2.597q-.191 0-.316-.125q-.126-.125-.126-.316t.126-.317t.317-.126h2.711q.327 0 .548.22q.222.222.222.549v3.846q0 .327-.222.548q-.221.221-.548.221");
}
</style><path class="qoty63byr"/>`,
		"fallback": "material-symbols-light:123-outline-rounded",
	});
}

export default Component;
